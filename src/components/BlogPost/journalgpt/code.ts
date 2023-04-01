const modifiedInput = `const inputPrompt = 
  \`Task Assigned:
  \${input1}\\n\\n
  Task Completed:
  \${input2}\\n\\n
  Plan For Next Day:
  \${input3}\\n\\n
  Any Issues Faced:
  \${input4}\\n\\n
  Gratitude:
  \${input5}\\n\\n
  Using the same header, elaborate and expand on the key points \${moodInput}.
\``;

const mutateJournalCode = `const callGenerateJournal = api.chatGPT.generateJournal.useMutation({
  onMutate: () =>
  toast.loading("Generating...", { id: "callGenerateJournal" }),
  onSuccess: () => toast.success("Done!", { id: "callGenerateJournal" }),
  onError: (e) =>
  toast.error(\`Error: \${e.data?.code || ""}\`, {
    id: "callGenerateJournal",
  }),
});

const handleClick = () => {
  if (input1 && input2 && input3 && input4 && input5) {
    callGenerateJournal.mutate({ text: inputPrompt });
  }
}`;

const generateJournalCode = `import { z } from "zod";
import { Configuration, OpenAIApi } from "openai";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { env } from "@/src/env/server.mjs";

const configuration = new Configuration({
  apiKey: env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default createTRPCRouter({
  generateJournal: protectedProcedure // protectedProcedure is to make sure the user is logged in
    .input(z.object({ text: z.string() }))
    .mutation(async ({ input }) => {
      const res = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: input.text, // modifed prompt input is passed here
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      if (res.data.choices.length > 0) {
        return res.data.choices[0]?.text; // returns the generated text
      }
      return "no response";
    }),
  // rest of the code
`;

const nextAuthCode = `export const authOptions: NextAuthOptions = {
  callbacks: {
    signIn({ account, profile }) {
      if (
        account?.provider === "google" &&
        profile?.email?.endsWith("@aleph-labs.com") // so only Alephians are allowed to use this application
      ) {
        return true;
      } else {
        return false;
      }
    },
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        // session.user.role = user.role; <-- put other properties on the session here
      }
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({ // using gmail as auth
      clientId: env.GOOGLE_ID, 
      clientSecret: env.GOOGLE_SECRET,
    }),
  ],
}
`;

const localStorageCode = ` useEffect(() => {
  const delayDebounceFn = handleDebounce();
  return () => clearTimeout(delayDebounceFn);
}, [input1, input2, input3, input4, input5]);

useEffect(() => {
  const storageData = localStorage.getItem("journalData");
  if (!storageData) return;
  const { journalData } = JSON.parse(storageData) as JournalData;
  if (journalData.input1) setInput1(journalData.input1);
  if (journalData.input2) setInput2(journalData.input2);
  if (journalData.input3) setInput3(journalData.input3);
  if (journalData.input4) setInput4(journalData.input4);
  if (journalData.input5) setInput5(journalData.input5);
  setDate(new Date().toLocaleDateString());
}, []);`;

export const code1 = modifiedInput;
export const code2 = mutateJournalCode;
export const code3 = generateJournalCode;
export const code4 = nextAuthCode;
export const code5 = localStorageCode;
