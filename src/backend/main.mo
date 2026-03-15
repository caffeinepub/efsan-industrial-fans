import Array "mo:core/Array";
import Int "mo:core/Int";
import List "mo:core/List";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Time "mo:core/Time";

actor {
  type BlogPost = {
    title : Text;
    date : Time.Time;
    category : Text;
    excerpt : Text;
    imageUrl : Text;
  };

  type ContactFormSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    subject : Text;
    message : Text;
  };

  module BlogPost {
    public func compareByDate(post1 : BlogPost, post2 : BlogPost) : Order.Order {
      Int.compare(post1.date, post2.date);
    };
  };

  let blogPostsMap = Map.empty<Text, BlogPost>();
  let contactSubmissions = List.empty<ContactFormSubmission>();

  public shared ({ caller }) func addBlogPost(title : Text, category : Text, excerpt : Text, imageUrl : Text) : async () {
    let newPost : BlogPost = {
      title;
      date = Time.now();
      category;
      excerpt;
      imageUrl;
    };
    blogPostsMap.add(title, newPost);
  };

  public query ({ caller }) func getAllBlogPosts() : async [BlogPost] {
    blogPostsMap.values().toArray();
  };

  public query ({ caller }) func getBlogPostsByCategory(category : Text) : async [BlogPost] {
    blogPostsMap.values().toArray().filter(func(post) { post.category == category });
  };

  public query ({ caller }) func getSortedBlogPostsByDate() : async [BlogPost] {
    blogPostsMap.values().toArray().sort(BlogPost.compareByDate);
  };

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, subject : Text, message : Text) : async () {
    let submission : ContactFormSubmission = {
      name;
      email;
      phone;
      subject;
      message;
    };
    contactSubmissions.add(submission);
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactFormSubmission] {
    Runtime.trap("Access to contact submissions is restricted");
  };
};
