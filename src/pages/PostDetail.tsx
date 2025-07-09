import { useParams } from "react-router-dom";

export default function PostDetail() {
  const { postId } = useParams();
  return (
    <div className="mt-8 p-4 border rounded bg-gray-100">
      <h2 className="text-2xl font-semibold mb-2">Post Detail</h2>
      <p>Showing details for post ID: <span className="font-mono">{postId}</span></p>
    </div>
  );
} 