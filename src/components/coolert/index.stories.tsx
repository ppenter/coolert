import type { Meta, StoryObj } from "@storybook/react";
import { CopyBlock, dracula } from "react-code-blocks";
import { Button } from "../ui/button";
import { CoolertWrapper } from "../wrapper";
import { AlertComponent, IAlertComponentProps, coolert } from "./index";

const Example = (args: IAlertComponentProps) => {
  const { title, description, type } = args;
  return (
    <div className="h-[640px] flex flex-col gap-4 items-center justify-start">
      <CoolertWrapper />
      <Button
        key={type}
        onClick={() => {
          coolert({
            title: title,
            description: description,
            type,
          });
        }}
      >
        {type}
      </Button>
      <CopyBlock
        text={`
  coolert({
    title: "Alert",
    description: "This is an alert",
    type: "default",
  });

`}
        theme={dracula}
        language="tsx"
      />
    </div>
  );
};

const meta: Meta<typeof AlertComponent> = {
  title: "Components/coolert",
  component: Example,
  parameters: {
    layout: "left",
    docs: {
      page: () => (
        <>
          <h1>Alert</h1>
          <p>Alert component</p>
          <h2>Usage</h2>
          <CopyBlock
            text={`
            coolert({
              title: "Alert",
              description: "This is an alert",
              type: "default",
            });
            `}
            theme={dracula}
            language="tsx"
          />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AlertDefault: Story = {
  args: {
    title: "Default Alert",
    description: "This is a default alert",
    type: "default",
  },
};

export const AlertInfo: Story = {
  args: {
    title: "Info Alert",
    description: "This is an info alert",
    type: "info",
  },
};

export const AlertWarning: Story = {
  args: {
    title: "Warning Alert",
    description: "This is a warning alert",
    type: "warning",
  },
};

export const AlertError: Story = {
  args: {
    title: "Error Alert",
    description: "This is an error alert",
    type: "error",
  },
};

export const AlertSuccess: Story = {
  args: {
    title: "Success Alert",
    description: "This is a success alert",
    type: "success",
  },
};
