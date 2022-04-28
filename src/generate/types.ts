export interface GitHubRepoTree {
  sha: string;
  url: string;
  tree: NestedTree[];
  truncated: boolean;
}

export interface NestedTree {
  path: string;
  mode: string;
  type: string;
  size?: number;
  sha: string;
  url: string;
}
