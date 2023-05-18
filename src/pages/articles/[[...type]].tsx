import Template from "@/templates/articles/[[...type]].template";

export default function Page() {
    return <Template articles={[
        {
            metadata: {
                title: "Insignt in TDD",
                subtitle: "TDD를 사용하며 느꼇던 인사이트들",
                tags: ["TDD", "Insights", "Test", "테스트_주도_개발"],
                createAt: "2020.05.18"
            },
            content: {
                content: "text 이것은 컨텐츠입니다."
            }
        }
    ]}/>
}