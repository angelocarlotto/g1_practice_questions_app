"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import TestCardV2 from "@components/TestCardV2";

const UpdatePrompt = ({ params, searchParams }) => {
  const router = useRouter();
  const promptId = params.id; //searchParams.get("id");

  const [post, setPost] = useState({});

  useEffect( () => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/tests/${params?.id}`);
      const data = await response.json();

      setPost(data);
    };

    if (params?.id) fetchPosts();
  }, [promptId]);

  return <TestCardV2 key={post.id} testAux={post} handleCardClick={() => {}} />;
};

export default UpdatePrompt;
