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
        but I no not have the habit to do so.
      </div>
      <T.Image src="/blogs/journalgpt/2.png" />
      <div>
        Personally, I am very bad at writing a well constructed email to send.
        So I decided to build a tool to help me, by only entering a few
        keypoints, and auto generating a well constructed email to send.
      </div>
      <div>First I created 4 text area for users to input.</div>
      <T.Image src="/blogs/journalgpt/3.png" />
      <div>Modified user inputs into prompts for ai.</div>
      <T.Code code={code1} />
      <div className="text-xl">TRPC</div>
      <div>
        Here I am using trpc to pass the modified prompts to serverless function
        backend.
      </div>
      <T.Code code={code2} />
      <div>
        And here is how it looks in the serverless function backend. So I use
        the openai library{" "}
        <T.Link href="https://www.npmjs.com/package/openai" /> to help generated
        the response.
      </div>
      <T.Code code={code3} />
      <div>
        API key is only use in serverless function so it will not be being
        exposed to client. I have also used protectedProcedure to make sure user
        has to logged in to gmail to call this API.
      </div>
      <T.Code code={code4} />
      <div>
        NextAuth also generates a session token and stores it in a server-side
        session object. So it allows user to only have to logged in once until
        sessions expired.
      </div>
      <div>
        Lastly, added a debounce and localstorage storing function to store
        user's input locall for every user.
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
