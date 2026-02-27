import { defineType, defineField } from "sanity";

export default defineType({
  name: "publication",
  title: "연구 성과",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "제목",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "titleEn",
      title: "영문 제목",
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
      name: "category",
      title: "카테고리",
      type: "string",
      options: {
        list: [
          { title: "단행본", value: "단행본" },
          { title: "정책보고서", value: "정책보고서" },
          { title: "학술논문", value: "학술논문" },
          { title: "뉴스레터", value: "뉴스레터" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "year",
      title: "연도",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "요약 설명",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "thumbnail",
      title: "썸네일 이미지",
      type: "image",
      options: { hotspot: true },
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
            {
              name: "caption",
              title: "캡션",
              type: "string",
            },
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
          { title: "레드", value: "#EA4335" },
        ],
      },
      initialValue: "#4285F4",
    }),
  ],
  orderings: [
    {
      title: "연도 (최신순)",
      name: "yearDesc",
      by: [{ field: "year", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "thumbnail" },
  },
});
