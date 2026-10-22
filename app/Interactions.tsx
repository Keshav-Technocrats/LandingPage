"use client";
import { useEffect } from "react";
import { initKT } from "../kt.js";

export default function Interactions() {
  useEffect(() => initKT(), []);
  return null;
}
