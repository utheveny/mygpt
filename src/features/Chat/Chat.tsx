import HeaderBar from "../../components/HeaderBar/HeaderBar";
import InputBar from "../../components/InputBar/InputBar";
import MessagesBox from "../../components/MessagesBox/MessagesBox";
import { useAppSelector } from "../../hooks";
import "./Chat.scss";

function Chat() {
  const messages = useAppSelector((state) => state.messages.messages);

  return (
    <div className="chatContainer">
      <HeaderBar />
      <MessagesBox messages={messages} />
      <InputBar messages={messages} />
    </div>
  );
}

export default Chat;
