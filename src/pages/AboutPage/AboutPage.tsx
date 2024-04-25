import styles from './AboutPage.module.scss';
import { MainReal, PageTitle } from '@/components';

export const AboutPage: React.FC = () => {
	return (
		<MainReal>
			<article>
				<PageTitle title="About" />

				<p className={styles.text}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus rerum magni
					aspernatur atque veritatis dolore a culpa recusandae iusto? A magnam aspernatur debitis
					deserunt adipisci provident voluptas molestias eveniet?
				</p>
				<p className={styles.text}>
					Praesentium accusantium atque qui explicabo soluta reiciendis voluptatibus suscipit
					ratione dicta. Ut nam corrupti illum totam, repudiandae voluptate, aliquam nisi inventore
					earum quae blanditiis facilis tenetur enim quisquam velit! Dolorem.
				</p>
				<p className={styles.text}>
					Blanditiis, quibusdam quas? Exercitationem quisquam vel iste quos reprehenderit at maiores
					architecto quibusdam dicta, magni est sunt veritatis ipsam, ullam nemo illo incidunt sequi
					perspiciatis. Iste magnam totam eaque! Possimus.
				</p>
				<p className={styles.text}>
					Dicta illo eaque suscipit mollitia rerum quidem deserunt eos assumenda minus culpa aut
					numquam atque, similique autem praesentium eveniet, tenetur consectetur quisquam nam, sit
					quas molestias expedita enim esse. Omnis!
				</p>
				<p className={styles.text}>
					Id delectus cum, nobis nostrum amet magni labore odio voluptatem. Mollitia minus
					cupiditate alias! Sapiente tempore delectus corrupti tenetur cumque harum pariatur facere
					inventore perspiciatis? Ea quae itaque maxime vel?
				</p>
			</article>
		</MainReal>
	);
};
