// 연구 성과
export const publicationsQuery = `*[_type == "publication"] | order(year desc) {
  _id, title, titleEn, slug, category, year, description, color,
  "thumbnailUrl": thumbnail.asset->url
}`;

export const publicationBySlugQuery = `*[_type == "publication" && slug.current == $slug][0] {
  _id, title, titleEn, slug, category, year, description, color, body,
  "thumbnailUrl": thumbnail.asset->url
}`;

// 프로그램
export const programsQuery = `*[_type == "program"] | order(_createdAt asc) {
  _id, title, subtitle, slug, description, details, color
}`;

export const programBySlugQuery = `*[_type == "program" && slug.current == $slug][0] {
  _id, title, subtitle, slug, description, details, color, body
}`;

// 학술 활동
export const academicActivitiesQuery = `*[_type == "academicActivity"] | order(_createdAt asc) {
  _id, title, category, slug, description, details, color
}`;

export const academicActivityBySlugQuery = `*[_type == "academicActivity" && slug.current == $slug][0] {
  _id, title, category, slug, description, details, color, body
}`;

// 연구 자료
export const resourcesQuery = `*[_type == "resource"] | order(date desc) {
  _id, title, slug, category, date, description,
  "fileUrl": file.asset->url
}`;

export const resourceBySlugQuery = `*[_type == "resource" && slug.current == $slug][0] {
  _id, title, slug, category, date, description, body,
  "fileUrl": file.asset->url
}`;
