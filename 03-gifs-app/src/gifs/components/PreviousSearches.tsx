import type { FC } from "react";

interface Props {
  searches: string[];
  onLabelClick?: (term: string) => void;
}

export const PreviousSearches: FC<Props> = ({
  searches = [],
  onLabelClick,
}) => {
  return (
    <section className="previous-searches">
      <h2>Búsquedas Previas</h2>
      <ul className="previous-searches-list">
        {searches.map((term) => (
          <li
            key={term}
            className="previous-searches-item"
            onClick={() => onLabelClick?.(term)}
          >
            {term}
          </li>
        ))}
      </ul>
    </section>
  );
};
