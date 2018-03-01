export interface Team {
  coreTeam: Member[];
  learningTeam: Member[];
}

export interface Member {
  name: string;
  role: string;
  githubUrl: string;
  avatar: string;
  twitterUrl: string;
  webpageUrl?: string;
}
