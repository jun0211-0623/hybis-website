import { defineType, defineField } from "sanity";

export default defineType({
  name: "resource",
  title: "연구 자료",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "제목",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "슬러그 (URL)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "카테고리",
      type: "string",
      options: {
        list: [
          { title: "정책보고서", value: "reports" },
          { title: "뉴스레터", value: "newsletters" },
          { title: "학술논문", value: "papers" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "날짜",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "요약 설명",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "file",
      title: "첨부 파일 (PDF 등)",
      type: "file",
    }),
    defineField({
      name: "body",
      title: "본문",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "caption", title: "캡션", type: "string" },
          ],
        },
      ],
    }),
  ],
  orderings: [
    {
      title: "날짜 (최신순)",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "date" },
  },
});
