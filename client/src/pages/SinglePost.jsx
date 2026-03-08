import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/axios';
import Loading from '../components/Loading';
import PostCard from '../components/PostCard';

const SinglePost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await api.get(`/api/post/${postId}`);
        if (data.success) setPost(data.post);
      } catch (e) {}
      setLoading(false);
    };
    fetchPost();
  }, [postId]);

  if (loading) return <Loading />;
  if (!post) return <div>Post not found.</div>;
  return <PostCard post={post} />;
};

export default SinglePost;
