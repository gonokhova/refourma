"use client";

import { useState, useRef, useEffect } from "react";
import { StatusBar } from "@/components/phone/PhoneFrame";
import { Canvas, NavRow } from "@/components/phone/Atoms";
import { useNav } from "@/lib/nav";
import { TRANSLATIONS, LANG_LABELS, type Lang } from "@/data/i18n";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function Frame01_Intake() {
  const { goTo } = useNav();
  const [lang, setLang] = useState<Lang>("EN");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [showResultsBtn, setShowResultsBtn] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const t = TRANSLATIONS[lang];

  // Auto-scroll messages to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const newUserMsg: Message = { role: "user", content: text };
    const newMessages = [...messages, newUserMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: messages, // send prior conversation
        }),
      });
      const data = await res.json();
      setMessages([
        ...newMessages,
        { role: "assistant", content: data.reply || "..." },
      ]);
      // Show "See results" button after first AI response
      setShowResultsBtn(true);
    } catch (err) {
      console.error(err);
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "Sorry, connection issue. Try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <StatusBar />
      <Canvas>
        <NavRow back="" meta={t.nav.listed} />

        {/* Greeting — only shown when no messages yet */}
        {messages.length === 0 ? (
          <>
            <h1
              className="mb-[8px] mt-[10px] text-[22px] font-light leading-[1.15] tracking-[-0.02em] text-[var(--color-ink)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.headline}{" "}
              <em className="not-italic" style={{ fontStyle: "italic" }}>
                {t.headlineEm}
              </em>
            </h1>
            <p className="mb-[12px] text-[10.5px] leading-[1.5] text-[var(--color-ink-mid)]">
              {t.subhead}
            </p>
          </>
        ) : (
          <div
            className="mb-[10px] mt-[6px] text-[10px] uppercase tracking-[0.14em] text-[var(--color-rust)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            ◆ Buyer&apos;s Analyst
          </div>
        )}

        {/* Messages area */}
        <div
          ref={scrollRef}
          className="mb-[10px] flex flex-1 flex-col gap-[8px] overflow-y-auto pr-[2px]"
        >
          {messages.map((m, idx) => (
            <ChatBubble key={idx} message={m} />
          ))}
          {loading && <ChatBubble message={{ role: "assistant", content: "..." }} loading />}
        </div>

        {/* Input area */}
        {!showResultsBtn ? (
          <ChatInput
            value={input}
            onChange={setInput}
            onSubmit={sendMessage}
            onKeyDown={handleKeyDown}
            disabled={loading}
            placeholder={
              messages.length === 0
                ? lang === "EN"
                  ? "A snow home for 4 weeks a year..."
                  : lang === "JA"
                    ? "年4週間の雪の家..."
                    : "全年4周的雪山住宅..."
                : lang === "EN"
                  ? "Ask anything..."
                  : lang === "JA"
                    ? "なんでも聞いて..."
                    : "随便问..."
            }
            lang={lang}
            setLang={setLang}
          />
        ) : (
          <button
            onClick={() => goTo(2)}
            className="flex items-center justify-between rounded-[12px] bg-[var(--color-rust)] px-[16px] py-[13px] text-[12.5px] font-medium text-[var(--color-bone)] transition-opacity hover:opacity-90"
          >
            <span>See matches</span>
            <span className="text-[16px] font-light" style={{ fontFamily: "var(--font-display)" }}>
              →
            </span>
          </button>
        )}
      </Canvas>
    </>
  );
}

function ChatBubble({
  message,
  loading,
}: {
  message: Message;
  loading?: boolean;
}) {
  const isUser = message.role === "user";

  if (isUser) {
    return (
      <div className="flex justify-end">
        <div
          className="max-w-[85%] rounded-[10px_10px_2px_10px] bg-[var(--color-ink)] px-[10px] py-[7px] text-[11px] leading-[1.4] text-[var(--color-bone)]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
        >
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start">
      <div
        className="max-w-[88%] rounded-[2px_10px_10px_10px] border-l-2 border-[var(--color-rust)] bg-[var(--color-paper-2)] px-[10px] py-[7px] text-[11px] leading-[1.45] text-[var(--color-ink)]"
      >
        {loading ? (
          <span className="flex gap-[3px]">
            <Dot />
            <Dot delay="0.15s" />
            <Dot delay="0.3s" />
          </span>
        ) : (
          message.content
        )}
      </div>
    </div>
  );
}

function Dot({ delay = "0s" }: { delay?: string }) {
  return (
    <span
      className="block h-[5px] w-[5px] rounded-full bg-[var(--color-rust)]"
      style={{
        animation: `pulse-dot 1s ease-in-out infinite`,
        animationDelay: delay,
      }}
    />
  );
}

function ChatInput({
  value,
  onChange,
  onSubmit,
  onKeyDown,
  disabled,
  placeholder,
  lang,
  setLang,
}: {
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  disabled: boolean;
  placeholder: string;
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  return (
    <div
      className="rounded-[14px] border border-[var(--color-line)] bg-white px-[12px] pb-[10px] pt-[12px]"
      style={{ boxShadow: "0 6px 18px -8px rgba(0,0,0,0.1)" }}
    >
      {/* Textarea */}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        rows={2}
        className="mb-[8px] w-full resize-none border-none bg-transparent text-[12px] leading-[1.4] text-[var(--color-ink)] placeholder-[var(--color-muted-strong)] focus:outline-none disabled:opacity-50"
        style={{ fontFamily: "var(--font-display)" }}
      />

      {/* Lang pills + send */}
      <div className="flex items-center justify-between border-t border-[var(--color-line-soft)] pt-[8px]">
        <div className="flex gap-[3px]">
          {(["EN", "JA", "ZH"] as Lang[]).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              className={`rounded-full px-[6px] py-[2px] text-[8px] tracking-[0.06em] transition-colors ${
                lang === l
                  ? "bg-[var(--color-ink)] text-[var(--color-bone)]"
                  : "bg-[var(--color-paper-2)] text-[var(--color-ink-mid)]"
              }`}
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {LANG_LABELS[l]}
            </button>
          ))}
        </div>
        <button
          onClick={onSubmit}
          disabled={disabled || !value.trim()}
          className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[var(--color-rust)] text-[12px] text-[var(--color-bone)] transition-opacity disabled:opacity-30"
        >
          →
        </button>
      </div>
    </div>
  );
}
