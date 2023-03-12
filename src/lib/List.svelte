<script lang="ts">
  import type { IListItem } from "../interfaces/ListItem";
  import ListItem from "./ListItem.svelte";

  export let isSkills: boolean;
  const languageItem: IListItem = {
    title: "Languages:",
    content: "Java - JS - TS - Solidity - C++ - Python",
  };
  const web2: IListItem = {
    title: "Web2: ",
    content: "Node.js - React.js - Next.js - Express.js - Mongo",
  };
  const web3: IListItem = {
    title: "Web3: ",
    content:
      "Hardhat - Truffle - Ethers.js - Web3.js - IPFS - Moralis - The Grpah - Chainlink - Chai.js",
  };

  const lastWords: IListItem = {
    title: "LastWords: ",
    content:
      'Proejct to let users mint their lastwords in forms in NFTs and show them in a <a href="https://last-words-last-words-nextjs-33go-9k0xbpdgy-asem-abdelhady.vercel.app/" >NFT gallery</a >. You can check: <a href="https://github.com/Asem-Abdelhady/LastWords">here</a>',
  };

  const ERC777: IListItem = {
    title: "ERC777: ",
    content:
      'My ERC777 token in goerli blockchain and 3 front-end websites that let the holder send ERC777 in a <a href="https://at-bulksend-c8qmsdq5b-asem-abdelhady.vercel.app/" >bulksend</a > or set a <a href="https://at-priceset-pybxgx8fa-asem-abdelhady.vercel.app/" >token-price</a > or do a<a href="https://at-staticsale-mjn891djm-asem-abdelhady.vercel.app/"> static sale</a >. You can check: <a href="https://github.com/Asem-Abdelhady/ERC777">here</a>',
  };

  const tgBot: IListItem = {
    title: "TG-BOT to access remote server: ",
    content:
      'This is a bot that lets me observe and do commands on my remote server using telegram API. I left instructions on how to make your own telegram bot. You can check: <a href="https://github.com/Asem-Abdelhady/Telegram_bot_to_access_remote_server" >here</a >',
  };
</script>

{#if isSkills}
  <div>
    <h2>Skills</h2>
    <ul>
      <ListItem listItem={languageItem} />
      <ListItem listItem={web2} />
      <ListItem listItem={web3} />
    </ul>
  </div>
{:else}
  <div>
    <h2>Projects</h2>
    <ul>
      <ListItem listItem={lastWords} />
      <ListItem listItem={ERC777} />
      <ListItem listItem={tgBot} />
    </ul>
  </div>
{/if}
