import { Button } from "@/components/ui/button";
import type { Meta, StoryObj } from "@storybook/react";
import { CopyBlock, dracula } from "react-code-blocks";
import { CoolertWrapper } from "../wrapper";
import { ConfirmComponent, IConfirmComponentProps, coolfirm } from "./index";

const Example = (args: IConfirmComponentProps) => {
  const { title, options } = args;
  return (
    <div className="h-[640px] flex flex-col gap-4 items-center justify-start">
      <CoolertWrapper />
      <Button
        key={options?.type}
        onClick={() => {
          coolfirm({
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
  coolfirm({
    title: "Default Confirm",
    description: "This is a default confirm",
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

const meta: Meta<typeof ConfirmComponent> = {
  title: "Dialogs/coolfirm",
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
            coolfirm({
              title: "Alert",
              description: "This is an alert",
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

export const ConfirmDefault: Story = {
  args: {
    title: "Default Confirm",
    options: {
      description: "This is a default confirm",
      type: "default",
    },
  },
};

export const ConfirmInfo: Story = {
  args: {
    title: "Info Confirm",
    options: {
      description: "This is an info confirm",
      type: "info",
    },
  },
};

export const ConfirmWarning: Story = {
  args: {
    title: "Warning Confirm",
    options: {
      description: "This is a warning confirm",
      type: "warning",
    },
  },
};

export const ConfirmError: Story = {
  args: {
    title: "Error Confirm",
    options: {
      description: "This is an error confirm",
      type: "error",
    },
  },
};

export const ConfirmSuccess: Story = {
  args: {
    title: "Success Confirm",
    options: {
      description: "This is a success confirm",
      type: "success",
    },
  },
};
