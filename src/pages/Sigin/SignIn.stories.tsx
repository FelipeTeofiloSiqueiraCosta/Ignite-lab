import { Meta, StoryObj } from "@storybook/react";
import { SignIn } from "./SignIn";

import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import { rest } from "msw";

export default {
  title: "Pages/SignIn",
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post("/sections", (req, res, ctx) => {
          return res(
            ctx.json({
              message: "Login Realizado",
            })
          );
        }),
      ],
    },
  },
} as Meta;

export const Default: StoryObj = {
  //função responsável por realizar os testes automatizados
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText("example@example.com"),
      "teste@gmail.com"
    );
    userEvent.type(canvas.getByPlaceholderText("*****"), "teste");

    userEvent.click(canvas.getByRole("button"));

    await waitFor(() => {
      return expect(canvas.getByText("Login Realizado")).toBeInTheDocument();
    });
  },
};
