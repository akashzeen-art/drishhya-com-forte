import { RequestHandler } from "express";
import { DESI_CONTENT } from "../../shared/desiContent";

export const handleVideos: RequestHandler = (_req, res) => {
  res.json({ videos: DESI_CONTENT });
};
