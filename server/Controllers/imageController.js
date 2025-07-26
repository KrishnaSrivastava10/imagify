import axios from "axios";
import userModel from "../models/userModel.js";
import FormData from "form-data";

export const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;

    const userId = req.user?.id;  // <-- updated


    if (!prompt || !userId) {
      return res.status(400).json({ success: false, message: "Missing prompt or userId" });
    }

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    if (user.creditBalance <= 0) {
      return res.status(403).json({
        success: false,
        message: "No Credit Balance",
        creditBalance: 0,
        redirectToPricing: true
      });
    }

    if (!process.env.CLIPDROP_API) {
      return res.status(500).json({ success: false, message: "Clipdrop API key missing" });
    }

    const formData = new FormData();
    formData.append("prompt", prompt);

    const apiResponse = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
          ...formData.getHeaders()
        },
        responseType: "arraybuffer"
      }
    );

    if (!apiResponse.data) {
      return res.status(500).json({ success: false, message: "Image generation failed" });
    }

    const base64Image = Buffer.from(apiResponse.data, "binary").toString("base64");
    const resultImage = `data:image/png;base64,${base64Image}`;

    await userModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 });

    return res.json({
      success: true,
      message: "Image Generated",
      creditBalance: user.creditBalance - 1,
      resultImage
    });
  } catch (error) {
    console.error("Image Generation Error:", error.message);
    return res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};
