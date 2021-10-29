import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div>
            <h1 className="text-center text-3xl my-4">Welcome to CodeMirror</h1>

            <p className="text-justify text-lg my-2 mt-16 mx-52">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra erat enim, et interdum est consequat quis. Etiam posuere rutrum viverra. Nam id dolor sit amet lacus imperdiet commodo vel a justo. Cras a metus vel odio imperdiet rhoncus. Aliquam in est sit amet ante dictum vestibulum. Fusce non ultricies erat. Phasellus nulla diam, vestibulum ac turpis in, egestas placerat nulla. Nunc at lorem sit amet orci blandit fringilla. </p>

            <p className="text-justify text-lg my-2 mx-52">Sed ut odio id felis rutrum malesuada vitae non nisi. Vivamus egestas est et libero finibus, ut tincidunt lectus rutrum. Mauris laoreet dolor ex, non consequat felis auctor et. Proin eros eros, elementum non augue at, ornare sagittis justo. Mauris ullamcorper diam non dui ultricies blandit. In ultrices vehicula justo, vitae sodales velit porttitor non. Etiam ullamcorper a felis non elementum. Fusce consectetur elit eleifend varius accumsan. Donec placerat, sapien non rhoncus dictum, turpis ex condimentum arcu, nec efficitur nisi purus vehicula tellus. Maecenas scelerisque eleifend aliquam. </p>

            <p className="text-justify text-lg my-2 mx-52">Nulla in vestibulum dolor. Phasellus ac sapien ac orci rutrum tincidunt. Quisque aliquam nisl non risus malesuada semper. Quisque elementum, nulla eget sodales malesuada, nibh dui blandit tellus, ac vestibulum tellus lectus at dui. Cras ullamcorper dictum metus quis scelerisque. Nam semper mauris vitae consequat interdum. In non pharetra felis, ut molestie dolor. Sed ac sollicitudin velit, quis finibus mauris. Sed in ultricies enim. Aenean convallis tempor justo, vel porttitor neque vulputate sit amet. Vestibulum vel lacus quis est elementum aliquet. Fusce vulputate at leo vitae tristique.</p>

            <div className="grid place-items-center my-8">
                <Link to="/upload">
                    <button className="bg-black p-2 text-xl px-8 text-white">
                        Get Started
                    </button>
                </Link>
            </div>
        </div>
    )
}
