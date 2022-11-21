import "./styles/global.css";
import { Logo } from "./components/Logo/";
import { Heading } from "./components/Heading/Heading";
import { Text } from "./components/Text/Text";
import { TextInput } from "./components/TextInput/TextInput";
import { Envelope, Key } from "phosphor-react";
import { Checkbox } from "./components/Checkbox/Checkbox";
import { Button } from "./components/Button/Button";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center text-gray-100">
      <div className="w-[400px] h-auto flex flex-col justify-center items-center">
        <header className="flex flex-col items-center">
          <Logo />
          <Heading size="lg">
            <h1>Ignite Lab</h1>
          </Heading>
          <Text size="md">
            <p className="text-gray-400">Faça login e comece a usar!</p>
          </Text>
        </header>
        <form className="flex flex-col items-stretch w-full gap-3">
          <label className="font-semibold text-gray-100" htmlFor="email">
            <Text size="sm">Endereço de email</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input placeholder="example@example.com" id="email" />
            </TextInput.Root>
          </label>
          <label className="font-semibold text-gray-100" htmlFor="pass">
            <Text size="sm">Sua Senha</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Key />
              </TextInput.Icon>
              <TextInput.Input type="password" placeholder="*****" id="pass" />
            </TextInput.Root>
          </label>
          <label
            htmlFor="remember"
            className="select-none flex items-center gap-2"
          >
            <Checkbox id="remember" />
            <Text size="sm">Lembrar de mim por 30 dias</Text>
          </label>
          <Button type="submit">Entrar na plataforma</Button>
        </form>

        <footer className="flex flex-col gap-1 mt-8 items-center">
          <Text size="sm">
            <a className="text-gray-400 underline">Esqueceu a senha?</a>
          </Text>
          <Text size="sm">
            <a className="text-gray-400 underline">
              Não Possui uma conta? Crie uma agrora!
            </a>
          </Text>
        </footer>
      </div>
    </div>
  );
}

export default App;
