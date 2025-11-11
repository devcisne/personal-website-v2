import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/card'

const projects = [
    {
        id: 1,
        title: 'Project One',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tech: ['React', 'TypeScript', 'Tailwind'],
        image: 'https://picsum.photos/400/300?random=1',
    },
    {
        id: 2,
        title: 'Project Two',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tech: ['Next.js', 'Node.js', 'MongoDB'],
        image: 'https://picsum.photos/400/300?random=2',
    },
    {
        id: 3,
        title: 'Project Three',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        tech: ['Vue.js', 'Express', 'PostgreSQL'],
        image: 'https://picsum.photos/400/300?random=3',
    },
    {
        id: 4,
        title: 'Project Four',
        description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        tech: ['Angular', 'Python', 'Django'],
        image: 'https://picsum.photos/400/300?random=4',
    },
    {
        id: 5,
        title: 'Project Five',
        description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        tech: ['Svelte', 'GraphQL', 'Prisma'],
        image: 'https://picsum.photos/400/300?random=5',
    },
    {
        id: 6,
        title: 'Project Six',
        description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
        tech: ['React Native', 'Firebase', 'Expo'],
        image: 'https://picsum.photos/400/300?random=6',
    },
]

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                    My Projects
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <Link key={project.id} href={`/projects/${project.id}`}>
                            <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full">
                                <div className="relative h-48 w-full mb-4">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover rounded-t-xl"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl">{project.title}</CardTitle>
                                    <CardDescription className="text-sm text-muted-foreground">
                                        {project.tech.join(' • ')}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                    <span className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                                        View Details →
                                    </span>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
