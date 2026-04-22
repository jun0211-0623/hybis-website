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

type AcademicsDict = {
  eyebrow: string;
  title: string;
  body: string;
  emptyMessage: string;
  cmsHint: string;
  speakerPrefix: string;
  categories: {
    seminar: string;
    colloquium: string;
    conference: string;
    workshop: string;
  };
};

const categoryColors: Record<string, string> = {
  seminar: "#0E4A84",
  colloquium: "#3A6EA5",
  conference: "#7A4E2D",
  workshop: "#8B4A4A",
};

export default function Academics({
  dict,
  activities,
}: {
  dict: AcademicsDict;
  activities?: Activity[];
}) {
  const hasData = activities && activities.length > 0;

  return (
    <section id="academics" className="py-20 lg:py-28 bg-white">
      <div className="section-divider mb-20" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <FadeIn>
          <div className="flex items-center justify-center gap-2.5 mb-5">
            <div className="w-8 h-[2px] bg-[#0E4A84]" />
            <span className="text-[#0E4A84] text-[12px] font-medium tracking-[0.1em] uppercase font-[family-name:var(--font-display)]">
              {dict.eyebrow}
            </span>
            <div className="w-8 h-[2px] bg-[#0E4A84]" />
          </div>
        </FadeIn>
        <FadeIn>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-[#1C1B1F] leading-[1.15] tracking-[-0.02em] text-center mb-4">
            {dict.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-[#4A4A4F] text-[15px] text-center mb-14 max-w-[520px] mx-auto">
            {dict.body}
          </p>
        </FadeIn>

        {hasData ? (
          <StaggerContainer className="space-y-4">
            {activities.map((activity) => {
              const color = categoryColors[activity.category] ?? "#0E4A84";
              const label =
                dict.categories[
                  activity.category as keyof AcademicsDict["categories"]
                ] ?? activity.category;
              return (
                <StaggerItem key={activity._id}>
                  <div className="group bg-[#F5F5F7] rounded-2xl border border-[#E5E5E7] p-6 sm:p-7 hover:border-[#0E4A84]/40 hover:shadow-lg hover:shadow-[#0E4A84]/10 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="flex-shrink-0 sm:w-24">
                        <span className="text-[13px] font-mono text-[#6B7280]">
                          {activity.date}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                            style={{
                              color,
                              background: `${color}15`,
                            }}
                          >
                            {label}
                          </span>
                          {activity.location && (
                            <span className="text-[11px] text-[#6B7280]">
                              {activity.location}
                            </span>
                          )}
                        </div>
                        <h3 className="text-[17px] font-semibold text-[#1C1B1F] mb-1.5 group-hover:text-[#0E4A84] transition-colors duration-200">
                          {activity.title}
                        </h3>
                        <p className="text-[14px] text-[#4A4A4F] leading-relaxed">
                          {activity.description}
                        </p>
                        {activity.speaker && (
                          <p className="text-[13px] text-[#6B7280] mt-2">
                            {dict.speakerPrefix} {activity.speaker}
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
          <FadeIn delay={0.2}>
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-[#0E4A84]/10 flex items-center justify-center mx-auto mb-5">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0E4A84"
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
                {dict.emptyMessage}
              </p>
              <p className="text-[#A0A0A5] text-[13px]">{dict.cmsHint}</p>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
