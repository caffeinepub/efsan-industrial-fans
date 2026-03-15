import { useMutation, useQuery } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useBlogPosts() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["blogPosts"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getSortedBlogPostsByDate();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitContact() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitContactForm(
        data.name,
        data.email,
        data.phone,
        data.subject,
        data.message,
      );
    },
  });
}
