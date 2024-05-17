import QuestionCard from "@/components/cards/QuestionCard"
import NoResults from "@/components/shared/NoResults"
import LocalSearchBar from "@/components/shared/search/LocalSearchBar"
import { IQuestion } from "@/database/question.model"
import { getQuestionByTagId } from "@/lib/actions/tag.actions"
import { URLProps } from "@/types"
import search from "@/public/assets/icons/search.svg"

const Page = async ({ params, searchParams }: URLProps) => {

    const result = await getQuestionByTagId({
        tagId: params.id,
        page: 1,
        searchQuery: searchParams.q
    })

    return (
        <>
            <h1 className="h1-bold text-dark100_light900">{result.tagTitle}</h1>
            <div className="mt-11 w-full">
                <LocalSearchBar
                    route="/"
                    iconPosition="left"
                    imgSrc={search}
                    placeholder="Search Tag question"
                    otherClasses="flex-1"
                />
            </div>
            <div className="mt-10 flex w-full flex-col gap-6">
                {/* {result.questions.length > 0 ? result.questions.map((question: IQuestion) => ( */}
                {result.questions.length > 0 ? result.questions.map((question: any) => (
                    <QuestionCard
                        key={question._id}
                        _id={question._id}
                        title={question.title}
                        tags={question.tags}
                        author={question.author}
                        upvotes={question.upvotes}
                        views={question.views}
                        answers={question.content}
                        createdAt={question.createdAt}
                    />
                )) :
                    <NoResults
                        title="There are no tag question to show"
                        description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
                        link="/ask-question"
                        linkTitle="Ask a Question"
                    />}
            </div>
        </>
    )
}

export default Page