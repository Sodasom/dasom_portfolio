import { IAboutContentProps } from "@/app/interface/About.interface";

export default function AboutContent({
  title,
  description,
}: IAboutContentProps) {
  return (
    <div>
      <h3 className="about_content_title">{title}</h3>
      <table className="border-separate border-spacing-y-6">
        <tbody>
          {description.map((el) => (
            <tr key={el.id} className="align-top">
              <td>
                <p className="about_content_description_date">{el.date}</p>
              </td>
              <td>
                <p className="about_content_description_name">{el.name}</p>
                <p className="about_content_description_part ">{el.part}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
