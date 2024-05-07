import React from "react";
import { createComponent } from "@lit/react";
import { Button } from "./button.wc";

export const ButtonComponent = createComponent({
  tagName: Button.tagName,
  elementClass: Button,
  react: React,
});
