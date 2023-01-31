// Copyright (C) 2023 Assistance.Chat contributors

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { createContext } from "react";

export type MessageOriginator = "client" | "agent";

export type MessageHistoryItem = {
  originator: MessageOriginator;
  message: string;
  timestamp: number;
};

type MessageHistory = MessageHistoryItem[];

type OriginatorNames = Record<MessageOriginator, string | null>;
type OriginatorProfilePictureUrls = Record<MessageOriginator, string | null>;

export type ChatContextData = {
  messageHistory: MessageHistory;
  originatorNames: OriginatorNames;
  originatorProfilePictureUrls: OriginatorProfilePictureUrls;
};

export const DefaultChatData = {
  messageHistory: [
    {
      originator: "agent" as MessageOriginator,
      message:
        "Hi, my name is {agentName}. Before we begin, may you please sign " +
        "in with one of the following two options:",
      timestamp: Date.now(),
    },
  ],
  originatorNames: {
    client: null,
    agent: "Michael",
  },
  originatorProfilePictureUrls: {
    client: null,
    agent: "https://www.w3schools.com/howto/img_avatar.png",
  },
};

export type ChatContextType = {
  chatData: ChatContextData;
  setChatData: (chatData: ChatContextData) => void;
};

export const ChatContext = createContext<ChatContextType>({
  chatData: DefaultChatData,
  setChatData: (chatData: ChatContextData) => {},
});
