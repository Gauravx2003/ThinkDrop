import ReactMarkdown from 'react-markdown';

export default function ContentRenderer({ content }: { content: string }) {
  return (
    <article className="prose prose-lg">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
