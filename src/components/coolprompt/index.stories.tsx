import type { Meta, StoryObj } from "@storybook/react";
import { CopyBlock, dracula } from "react-code-blocks";
import { Button } from "../ui/button";
import { CoolertWrapper } from "../wrapper";
import { IPropmtComponentProps, PropmtComponent, coolprompt } from "./index";

const Example = (args: IPropmtComponentProps) => {
  const { title, description, type } = args;
  return (
    <div className="h-[640px] flex flex-col gap-4 items-center justify-start">
      <CoolertWrapper />
      <Button
        key={type}
        onClick={() => {
          coolprompt({
            title: title,
            description: description,
            type,
            onConfirm: (value) => {
              console.log("Confirm: ", value);
            },
            onCancel: () => {
              console.log("Cancel");
            },
          });
        }}
      >
        {type}
      </Button>
      <CopyBlock
        text={`
  coolprompt({
    title: "Default Prompt",
    description: "This is a default prompt",
    type: "default",
    onSubmit: (value) => {
      console.log("Confirm: ", value);
    }
  });

`}
        theme={dracula}
        language="tsx"
      />
    </div>
  );
};

const meta: Meta<typeof PropmtComponent> = {
  title: "Components/coolprompt",
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
            coolprompt({
              title: "Propmt",
              description: "This is an prompt",
              type: "default",
              onConfirm: (value) => {
                console.log("Confirm: ", value);
              },
              onCancel: () => {
                console.log("Cancel");
              },
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

export const PromptDefault: Story = {
  args: {
    title: "Default Propmt",
    description: "This is a default prompt",
    type: "default",
  },
};

export const PromptInfo: Story = {
  args: {
    title: "Info Propmt",
    description: "This is an info prompt",
    type: "info",
  },
};

export const PromptWarning: Story = {
  args: {
    title: "Warning Propmt",
    description: "This is a warning prompt",
    type: "warning",
  },
};

export const PromptError: Story = {
  args: {
    title: "Error Propmt",
    description: "This is an error prompt",
    type: "error",
  },
};

export const PromptSuccess: Story = {
  args: {
    title: "Success Propmt",
    description: "This is a success prompt",
    type: "success",
  },
};
