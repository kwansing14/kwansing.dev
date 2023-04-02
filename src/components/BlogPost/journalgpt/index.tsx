import Template, { T } from "@/components/BlogPost/Template";
import {
  code1,
  code2,
  code3,
  code4,
  code5,
} from "@/components/BlogPost/journalgpt/code";

const Journalgpt: React.FC = () => {
  return (
    <Template date="01 Apr 2023" title="Journal GPT for Alephians" mins={10}>
      <T.Image src="/blogs/journalgpt/1.gif" />
      <div>
        Deployed: <T.Link href="https://aleph-daily-journal.vercel.app/" />
        <br />
        Github:{" "}
        <T.Link href="https://github.com/kwansing14/daily-journal-gpt" />
      </div>
      <div>
        In Aleph, the company appreciates the habits of writing daily journals,
        but I just do not have the habit to do so.
      </div>
      <T.Image src="/blogs/journalgpt/2.png" />
      <div>
        Personally, I am very bad at writing a well constructed journal, as I
        only like to write in point form. So I decided to build a tool to help
        me, by only entering a few keypoints, and auto generating a well
        constructed journal for me.
      </div>
      <div>First I created 4 text area for users to input.</div>
      <T.Image src="/blogs/journalgpt/3.png" />
      <div>Then modified user inputs into prompts for the ai.</div>
      <T.Code code={code1} />
      <T.Subtitle>TRPC</T.Subtitle>
      <div>
        Here I pass the modified prompts using TRPC mutate to the backend.
      </div>
      <T.Code code={code2} />
      <T.Subtitle>API route</T.Subtitle>
      <div>
        And here is how it looks in the backend. I use the openai library{" "}
        <T.Link href="https://www.npmjs.com/package/openai" /> here. API key is
        only pass here,protectedProcedure from NextAuth to make sure user has to
        logged in to gmail to call this API.
      </div>
      <T.Code code={code3} />
      <T.Subtitle>NextAuth</T.Subtitle>
      <div>
        NextAuth to handle Gmail auth and making sure that only
        "@aleph-labs.com" account can use this app. NextAuth also generates a
        session token and stores it in a server-side session object. So it
        allows user to only have to logged in once until sessions expired.
      </div>
      <T.Code code={code4} />
      <T.Subtitle>Debounce & localstorage</T.Subtitle>
      <div>
        Lastly, added a debounce and localstorage storing function to store
        user's input locally for every user.
      </div>
      <T.Code code={code5} />
      <div>
        Deployed: <T.Link href="https://aleph-daily-journal.vercel.app/" />
        <br />
        Github:{" "}
        <T.Link href="https://github.com/kwansing14/daily-journal-gpt" />
      </div>
    </Template>
  );
};

export default Journalgpt;
