import { LiteraryWork } from '../../data/literaryWorkUtils';
import LiteraryWorkCard from './LiteraryWorkCard';
import './Literary.css';

interface CategorySectionProps {
  category: string;
  works: LiteraryWork[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, works }) => {
  console.log('CategorySection rendered with category:', category);
  return (
    <div className="category-section" id={category.toLowerCase()}>
      <h2 className="category-title">{category}</h2>
      <div className="works-grid">
        {works.map((work) => (
          <div key={work.slug} className="work-item">
            <LiteraryWorkCard work={work} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection; 