import React from "react";
import { createComponent } from "@lit/react";
import { NewButton } from "./newbutton.wc";

export const NewButtonComponent = createComponent({
  tagName: NewButton.tagName,
  elementClass: NewButton,
  react: React,
});
