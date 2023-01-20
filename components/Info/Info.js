import style from './Info.module.scss'
import { Tool } from './Tool'

export function Info(){
    return (
        <section className={style.Info}>
            <div className={style.Info__text}>
                <h2>Ready to Get started?</h2>
                <p>When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics.</p>
                <button>Contact us</button>
            </div>

            <div className={style.Info__tools}>
                <Tool tool_article="What can I do to protect our planet?" tool_text="Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources" />
                <Tool tool_article="How to save nature ecology?" tool_text="Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources" />
                <Tool tool_article="What is nature conservation?" tool_text="Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources" />
            </div>
        </section>
    )
}