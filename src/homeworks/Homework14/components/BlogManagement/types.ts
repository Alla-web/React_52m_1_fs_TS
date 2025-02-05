export interface MessageType {
  inputMessage: string;
}

export interface BlogManagementType {
  inputMessage: MessageType | undefined;
  //функция из стейта
  onClick: React.Dispatch<React.SetStateAction<string>> | (() => void);
}
