import HeaderButton from "./HeaderButton";
import { SUBSTACK_BLOGS } from "../../../constants/substackBlogs";

export default function WritingsHeader(props) {
  const { blogActive, setBlogActive } = props;

  return (
    <nav className="mb-6">
      <HeaderButton
        key="Software"
        title="Software Blog"
        blogState={blogActive}
        blogType={SUBSTACK_BLOGS.SOFTWARE.blogType}
        setState={setBlogActive}
      />
      <HeaderButton
        key="Hardware"
        title="Hardware Blog"
        blogState={blogActive}
        blogType={SUBSTACK_BLOGS.HARDWARE.blogType}
        setState={setBlogActive}
      />
    </nav>
  );
}
