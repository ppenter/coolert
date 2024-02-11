import { Button } from "@/components/ui/button";
import type { Meta, StoryObj } from "@storybook/react";
import { CopyBlock, dracula } from "react-code-blocks";
import { CoolertWrapper } from "../wrapper";
import { IPropmtComponentProps, PropmtComponent, coolprompt } from "./index";

const Example = (args: IPropmtComponentProps) => {
  const { title, options } = args;
  return (
    <div className="h-[640px] flex flex-col gap-4 items-center justify-start">
      <CoolertWrapper />
      <Button
        key={options?.type}
        onClick={() => {
          coolprompt({
            title: title,
            options,
            onConfirm: (value) => {
              console.log("Confirm: ", value);
            },
            onCancel: () => {
              console.log("Cancel");
            },
          });
        }}
      >
        {options?.type}
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
  title: "Dialogs/coolprompt",
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
    options: {
      description: "This is a default prompt",
      type: "default",
    },
  },
};

export const PromptPassword: Story = {
  args: {
    title: "Password Propmt",
    options: {
      description: "This is an password prompt",
      type: "info",
      inputType: "password",
    },
  },
};
