"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";

const CreateAnnouncement = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session?.user) router.push("/");

  const [submitting, setSubmitting] = useState(false);
  const [announcement, setAnnouncement] = useState({
    header: "",
    desc: "",
  });

  const createAnnouncement = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/announcements/new", {
        method: "POST",
        body: JSON.stringify({
          header: announcement.header,
          desc: announcement.desc,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">Duyuru Ekle</span>
      </h1>
      <form
        onSubmit={createAnnouncement}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Başlık:
          </span>
          <input
            value={announcement.header}
            onChange={(e) =>
              setAnnouncement({ ...announcement, header: e.target.value })
            }
            placeholder="..."
            required
            className="form_input"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Açıklama:
          </span>
          <textarea
            value={announcement.desc}
            onChange={(e) =>
              setAnnouncement({ ...announcement, desc: e.target.value })
            }
            placeholder="..."
            required
            className="form_textarea"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            İptal
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? "Ekleniyor ..." : "Ekle"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateAnnouncement;
