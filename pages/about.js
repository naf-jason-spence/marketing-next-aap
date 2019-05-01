import Layout from '../components/Layout'
import NextSeo from 'next-seo';

export default function About() {
    return (
        <Layout>
            <NextSeo config={{
                title: 'About Us',
                description: 'This is our test description for our about page.',
            }} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis lorem vitae malesuada pharetra. Fusce ac turpis risus. In vitae lorem non enim auctor posuere. Quisque quis massa id ante sagittis elementum. Nam volutpat ex dui, et tincidunt dui porta iaculis. Phasellus tristique sem a convallis lobortis. Cras bibendum, urna vitae fermentum volutpat, ex risus luctus elit, non porttitor ante diam vitae ligula. Nullam porta est enim, sed suscipit felis lobortis egestas. Aenean non mauris quis felis bibendum blandit molestie nec magna. Duis molestie bibendum eros eget fringilla. Pellentesque quis facilisis est, ac efficitur magna. Vivamus condimentum lacus nunc, quis varius mi mollis tempor. Cras dolor mauris, facilisis vitae porttitor vel, imperdiet id tortor. Nunc ligula risus, varius vitae arcu id, tempus placerat turpis.</p>
            <p>Nam id venenatis massa. Ut at imperdiet orci. Pellentesque sit amet mattis libero, vel gravida dui. Duis fringilla ligula quis metus mattis ultricies. Donec eu lorem dolor. Phasellus accumsan hendrerit arcu, non ultricies lacus scelerisque ac. Proin turpis metus, mollis et feugiat in, commodo sit amet erat. Nam vel ex at tellus fermentum facilisis. Phasellus ultricies nibh nisl, eget condimentum neque gravida sed. Quisque quis felis in dolor pretium eleifend. Pellentesque auctor nec orci a vestibulum. Nullam volutpat, neque nec congue tincidunt, enim metus aliquam purus, id imperdiet mauris urna at urna. Donec elementum suscipit pellentesque. Phasellus massa tortor, laoreet id rhoncus sit amet, tempus at lacus. Cras cursus nisl enim, in sollicitudin nunc laoreet non. Vestibulum faucibus placerat enim vitae cursus.</p>
            <p>Phasellus et commodo velit. Phasellus sit amet magna et libero congue dapibus. Suspendisse facilisis, enim sed interdum tincidunt, mi velit tristique leo, sodales fringilla justo sem eu libero. Nulla in ultricies felis. Praesent feugiat, nunc in euismod placerat, arcu tortor egestas sapien, eu molestie velit arcu at nunc. Ut gravida ipsum libero, nec tincidunt libero iaculis eget. Fusce feugiat, turpis sit amet egestas pharetra, eros tortor dignissim massa, nec pretium nunc quam in ipsum. Nullam ornare suscipit erat. Fusce egestas, lacus ac dapibus porttitor, nunc lacus convallis risus, sit amet sodales lectus mauris at eros. Nunc non orci non quam porttitor facilisis. Phasellus consectetur metus nibh, ut faucibus odio rutrum ut. Sed vel turpis molestie nisl consectetur luctus id at magna. Phasellus at tortor magna. Pellentesque in orci nisi. Vivamus viverra leo ipsum, ut dignissim mauris hendrerit sit amet. Donec efficitur id sem pharetra luctus.</p>
            <p>Donec feugiat congue nunc sed aliquet. Nam vitae dui iaculis, gravida ligula id, fringilla nibh. Cras tincidunt turpis et dui hendrerit, id gravida nisl ultricies. Nulla mattis tristique magna varius tempus. Pellentesque quis ipsum venenatis, varius dui a, feugiat ex. Nam efficitur massa vel sollicitudin finibus. Sed malesuada quam id euismod interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ullamcorper, neque vitae blandit laoreet, erat nulla mollis augue, ac vulputate dui mauris ac diam. Aliquam pretium, ipsum ac scelerisque finibus, tortor sapien venenatis turpis, ut ornare nisl ipsum vitae justo. Ut vitae molestie massa. Nam eget arcu sagittis, semper turpis id, dignissim sapien. Vestibulum eget tortor varius, euismod mi ac, tempus metus. Vestibulum auctor diam eu aliquet vestibulum. Nunc accumsan quis tellus eget blandit. Nam ultricies purus sit amet tortor dictum molestie.</p>
            <style jsx>{`
                p {
                    font-family: 'Arial';
                    font-size: 1rem;
                    line-height: 1.4;
                }
            `}</style>
        </Layout>
    )
}