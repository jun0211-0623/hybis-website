import { defineType, defineField } from "sanity";

export default defineType({
  name: "program",
  title: "프로그램",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "제목",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "영문 부제",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "슬러그 (URL)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "요약 설명",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "details",
      title: "세부 사항",
      type: "array",
      of: [{ type: "string" }],
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
    defineField({
      name: "color",
      title: "액센트 컬러",
      type: "string",
      options: {
        list: [
          { title: "블루", value: "#4285F4" },
          { title: "그린", value: "#34A853" },
          { title: "옐로우", value: "#FBBC05" },
        ],
      },
      initialValue: "#4285F4",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "subtitle" },
  },
});
