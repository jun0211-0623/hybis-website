# HYBIS 홈페이지

한양대학교 비트코인 학제간연구소(HYBIS) 공식 홈페이지

## 기술 스택
- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **Framer Motion** (스크롤 애니메이션)
- **Pretendard** 폰트 (한국어)
- **Playfair Display** 폰트 (세리프 제목)

---

## 로컬 개발 환경 실행

```bash
# 의존성 설치
npm install

# 개발 서버 시작 (http://localhost:3000)
npm run dev
```

---

## GitHub + Vercel 배포 방법

### 1단계: GitHub 레포지토리 생성
1. [github.com](https://github.com) 접속 후 로그인
2. 우상단 `+` → **New repository** 클릭
3. Repository name: `hybis-website`
4. **Create repository** 클릭

### 2단계: 코드를 GitHub에 업로드

이 프로젝트 폴더에서 터미널 열기:

```bash
git init
git add .
git commit -m "initial commit: HYBIS website"
git branch -M main
git remote add origin https://github.com/[내-아이디]/hybis-website.git
git push -u origin main
```

> `[내-아이디]` 부분을 본인 GitHub 아이디로 교체하세요.

### 3단계: Vercel 배포
1. [vercel.com](https://vercel.com) 접속 후 GitHub 계정으로 로그인
2. **Add New → Project** 클릭
3. `hybis-website` 레포지토리 선택 후 **Import**
4. 설정 변경 없이 **Deploy** 클릭
5. 1~2분 후 `https://hybis-website.vercel.app` 주소로 배포 완료

### 이후 업데이트 방법
코드 수정 후 아래 명령어만 실행하면 자동 재배포됩니다:

```bash
git add .
git commit -m "update: 변경 내용"
git push
```

---

## 컨텐츠 수정 가이드

| 파일 | 수정할 내용 |
|------|------------|
| `components/About.tsx` | 연구소 소개 텍스트, 통계 수치 |
| `components/ResearchHighlights.tsx` | 출판물/보고서 정보 |
| `components/Programs.tsx` | 프로그램 내용 |
| `components/Academics.tsx` | 학술 활동 내용 |
| `components/Resources.tsx` | 자료 목록 |
| `components/Footer.tsx` | 연락처, 주소 |
| `app/globals.css` | 색상, 폰트 등 디자인 |

### 색상 변경
`app/globals.css`의 `@theme` 섹션:
```css
--color-gold: #C9A84C;   /* 골드 강조색 */
--color-navy: #0B1220;   /* 딥 네이비 배경 */
```

---

## 도메인 연결 (hybis.kr → Vercel)
1. Vercel 대시보드 → 프로젝트 → **Settings → Domains**
2. `hybis.kr` 입력 후 **Add**
3. 도메인 등록 업체(가비아 등)에서 DNS 설정:
   - A 레코드: `76.76.21.21`
   - CNAME: `cname.vercel-dns.com`
