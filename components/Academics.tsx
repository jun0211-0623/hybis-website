"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";

interface Activity {
  _id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  speaker?: string;
  location?: string;
  slug?: { current: string };
}

// CMS 데이터가 없을 때 보여줄 빈 상태 — 플레이스홀더 데이터 없음
const emptyMessage = "행사 정보가 준비되면 이곳에 게시됩니다.";

const categoryLabels: Record<string, { label: string; color: string }> = {
  seminar: { label: "세미나", color: "#7EBAB5" },
  colloquium: { label: "콜로키움", color: "#7A8FA6" },
  conference: { label: "학술대회", color: "#A89078" },
  workshop: { label: "워크숍", color: "#9B7A7A" },
};

export default function Academics({
  activities,
}: {
  activities?: Activity[];
}) {
  const hasData = activities && activities.length > 0;

  return (
    <section id="academics" className="py-20 lg:py-28 bg-[#0A0A0A]">
      <div className="section-divider mb-20" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <FadeIn>
          <div className="flex items-center justify-center gap-2.5 mb-5">
            <div className="w-8 h-[2px] bg-[#7EBAB5]" />
            <span className="text-[#7EBAB5] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
              Events &amp; Activities
            </span>
            <div className="w-8 h-[2px] bg-[#7EBAB5]" />
          </div>
        </FadeIn>
        <FadeIn>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-white leading-[1.15] tracking-[-0.02em] text-center mb-4">
            행사 및 활동
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-[#9AA0A6] text-[15px] text-center mb-14 max-w-[520px] mx-auto">
            Bitcoinology Lab의 세미나, 콜로키움, 학술대회 등 주요 행사 이력을
            확인하세요.
          </p>
        </FadeIn>

        {hasData ? (
          <StaggerContainer className="space-y-4">
            {activities.map((activity) => {
              const cat = categoryLabels[activity.category] || {
                label: activity.category,
                color: "#7EBAB5",
              };
              return (
                <StaggerItem key={activity._id}>
                  <div className="group bg-[#111111] rounded-2xl border border-[#1E1E1E] p-6 sm:p-7 hover:border-[#333] hover:shadow-lg hover:shadow-black/15 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Date */}
                      <div className="flex-shrink-0 sm:w-24">
                        <span className="text-[13px] font-mono text-[#6B7280]">
                          {activity.date}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                            style={{
                              color: cat.color,
                              background: `${cat.color}15`,
                            }}
                          >
                            {cat.label}
                          </span>
                          {activity.location && (
                            <span className="text-[11px] text-[#6B7280]">
                              {activity.location}
                            </span>
                          )}
                        </div>
                        <h3 className="text-[17px] font-semibold text-white mb-1.5 group-hover:text-[#7EBAB5] transition-colors duration-200">
                          {activity.title}
                        </h3>
                        <p className="text-[14px] text-[#9AA0A6] leading-relaxed">
                          {activity.description}
                        </p>
                        {activity.speaker && (
                          <p className="text-[13px] text-[#6B7280] mt-2">
                            발표: {activity.speaker}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        ) : (
          /* Empty state */
          <FadeIn delay={0.2}>
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-[#7EBAB5]/10 flex items-center justify-center mx-auto mb-5">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7EBAB5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <p className="text-[#6B7280] text-[15px] mb-2">
                {emptyMessage}
              </p>
              <p className="text-[#444] text-[13px]">
                Sanity CMS에서 행사를 등록하면 자동으로 표시됩니다.
              </p>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
