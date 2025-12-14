import { MessageSquareText, Mail, MapPin, Smartphone } from "lucide-react";

const Contact = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Quick Assists */}
      <section className="py-10 sm:py-14">
        <h1 className="heading-3 text-dark-900">Quick Assists</h1>
        <p className="body mt-1 text-dark-700">
          Answers to our most frequently asked questions are just one click
          away.
        </p>

        <div className="mt-6 border-t border-light-300" />

        <div className="mt-8 grid gap-10 lg:grid-cols-3">
          <QuickAssistColumn
            title="Returns"
            items={[
              "What is Nike's return policy?",
              "How do I return my Nike order?",
              "Where is my refund?",
              "View all",
            ]}
          />
          <QuickAssistColumn
            title="Dispatch & Delivery"
            items={[
              "What are Nike's delivery options?",
              "Can my Nike order be dispatched internationally?",
              "Does my Nike order need to clear customs?",
              "View all",
            ]}
          />
          <QuickAssistColumn
            title="Orders & Payment"
            items={[
              "Where is my Nike order?",
              "Can I cancel or change my Nike order?",
              "What are Nike's payment options?",
              "View all",
            ]}
          />

          <QuickAssistColumn
            title="Shopping"
            items={[
              "How do I find the right size and fit?",
              "How can I get Nike's best deals?",
              "Does Nike offer product advice?",
              "View all",
            ]}
          />
          <QuickAssistColumn
            title="Nike Membership & Apps"
            items={[
              "What is Nike Membership?",
              "How can I join a Nike SNKRS Draw?",
              "How do I get Nike's newest sneaker releases?",
              "View all",
            ]}
          />
          <QuickAssistColumn
            title="Company Info"
            items={[
              "Do Nike shoes have a warranty?",
              "What is Nike's mission?",
              "Where can I learn more about Nike, Inc.?",
              "View all",
            ]}
          />
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <h2 className="heading-3 text-dark-900">Contact Us</h2>
        <div className="mt-4 border-t border-light-300" />

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <ContactItem
            icon={<MessageSquareText className="h-10 w-10" />}
            title="Chat with us"
            lines={["9:00 - 22:00", "7 days a week"]}
          />
          <ContactItem
            icon={<Smartphone className="h-10 w-10" />}
            title="Call us"
            lines={["000 800 919 0566", "9:00 - 22:00", "7 days a week"]}
          />
          <ContactItem
            icon={<Mail className="h-10 w-10" />}
            title="Email us"
            lines={["We'll reply within five business days"]}
          />
          <ContactItem
            icon={<MapPin className="h-10 w-10" />}
            title="Find a store"
            lines={[]}
          />
        </div>
      </section>
    </main>
  );
};

function QuickAssistColumn({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h3 className="body-medium text-dark-900">{title}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((t, idx) => {
          const isViewAll = t.toLowerCase() === "view all";
          return (
            <li
              key={`${title}-${idx}`}
              className={[
                isViewAll ? "caption text-dark-700" : "body text-dark-900",
                isViewAll ? "pt-1" : "",
              ].join(" ")}
            >
              {t}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ContactItem({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center text-dark-900">
        {icon}
      </div>

      <h3 className="body-medium mt-4 text-dark-900">{title}</h3>
      {lines.length > 0 && (
        <div className="body mt-2 space-y-1 text-dark-900">
          {lines.map((l) => (
            <p key={l}>{l}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Contact;
