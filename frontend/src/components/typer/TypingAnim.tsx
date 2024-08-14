import { TypeAnimation } from "react-type-animation";

export const TypeAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "Chat with your OWN AI",
        1000,
        "Built with open AI 🤖",
        2000,
        "Your own customized ChatGPT 💻",
        1500,
      ]}
      speed={50}
      style={{
        fontSize: "50px",
        color: "white",
        display: "inline-block",
        boxShadow: "1px 1px 20px #000",
      }}
      repeat={Infinity}
    />
  );
};
