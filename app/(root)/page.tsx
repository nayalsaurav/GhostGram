import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { AnimatedListEffect } from "@/components/AnimatedListEffect";
import { GetStartedButton } from "@/components/GetStartedButton";
export default function Home() {
  return (
    <section className="w-full mx-auto my-20 z-99">
      <div className=" p-4  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="scroll-m-20 text-center text-4xl md:text-7xl font-bold tracking-tight text-balance">
          Got Questions? Ghost Them My Way
        </h1>

        <p className="mt-7 text-muted-foreground text-xl max-w-lg text-center mx-auto">
          GhostGram - Share your link. Receive anonymous questions. Stay curious, stay unfiltered.
        </p>
        <GetStartedButton />
      </div>
      <InfiniteMovingCards
        items={[
          {
            username: "Anonymous",
            handle: "@commitCrazy",
            response:
              "How do you stay motivated to code after a long day of meetings and deadlines?",
          },
          {
            username: "Anonymous",
            handle: "@refactorRanger",
            response:
              "Have you ever refactored a huge codebase alone? How did you approach it without burning out?",
          },
          {
            username: "Anonymous",
            handle: "@debugDruid",
            response:
              "What’s your go-to mindset or strategy when you’re stuck on a bug for hours?",
          },
          {
            username: "Anonymous",
            handle: "@featureFreak",
            response:
              "Do you ever feel pressure to constantly ship features even when they’re not ready?",
          },
          {
            username: "Anonymous",
            handle: "@sprintSkeptic",
            response:
              "Does your team actually follow Agile properly, or is it just buzzwords and Jira tickets?",
          },
          {
            username: "Anonymous",
            handle: "@mergeConflictz",
            response:
              "How do you handle merge conflicts without losing your mind during crunch time?",
          },
          {
            username: "Anonymous",
            handle: "@fullstackFog",
            response:
              "Do you think being a 'full-stack developer' is realistic, or just a hiring buzzword?",
          },
          {
            username: "Anonymous",
            handle: "@buildBreakRepeat",
            response:
              "How do you deal with imposter syndrome when working with senior devs?",
          },
          {
            username: "Anonymous",
            handle: "@standupSilence",
            response:
              "Do you ever feel like daily standups are more performance than productivity?",
          },
          {
            username: "Anonymous",
            handle: "@apiArtisan",
            response:
              "What’s the cleanest API design principle you've learned that you wish others followed?",
          },
        ]}
      />
      <InfiniteMovingCards
        direction="right"
        items={[
          {
            username: "Anonymous",
            handle: "@consoleLogger",
            response:
              "What’s one bad coding habit you know you should break but haven’t yet?",
          },
          {
            username: "Anonymous",
            handle: "@cliJunkie",
            response:
              "What tool or CLI command do you use daily that you wish more devs knew about?",
          },
          {
            username: "Anonymous",
            handle: "@envHacker",
            response:
              "How do you manage secrets and env files securely in personal projects?",
          },
          {
            username: "Anonymous",
            handle: "@unitTestPhobic",
            response:
              "Be honest — do you write tests before or after you write the code… or never?",
          },
          {
            username: "Anonymous",
            handle: "@codeWhisperr",
            response:
              "What’s your strategy for reviewing a 1,000+ line pull request without losing context?",
          },
          {
            username: "Anonymous",
            handle: "@gitGuardianXD",
            response:
              "How do you stay organized with Git branches when juggling multiple features?",
          },
          {
            username: "Anonymous",
            handle: "@legacySurvivor",
            response:
              "What’s the scariest legacy code you’ve ever had to work on, and how did you survive?",
          },
          {
            username: "Anonymous",
            handle: "@hotReloadHero",
            response:
              "Do you prefer hot reload or full rebuilds — and why does one feel more ‘real’ to you?",
          },
          {
            username: "Anonymous",
            handle: "@frontendFlame",
            response:
              "Which frontend framework do you secretly dislike but have to work with anyway?",
          },
          {
            username: "Anonymous",
            handle: "@prodPushRegret",
            response:
              "Have you ever accidentally pushed to production and what did you learn from it?",
          },
        ]}
      />

      <h2 className="my-10 text-3xl font-bold tracking-tight first:mt-0 text-center">
        Receive Instant Messages
      </h2>

      <AnimatedListEffect />
    </section>
  );
}
