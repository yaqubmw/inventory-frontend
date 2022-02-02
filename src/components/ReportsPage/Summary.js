import Button from "components/Elements/Button";
import React from "react";

export default function Summary() {
  return (
    <div className="w-screen flex justify-center items-center">
      <div>
        <p>Summary</p>
        <p>This is Button</p>
        <Button variant="primary" size="sm">Primary Button</Button>
        <Button variant="primary" size="normal">Primary Button</Button>
        <Button variant="primary" size="lg">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="danger">Danger Button</Button>
        <Button disabled>Disable Button</Button>
      </div>
    </div>
  );
}
