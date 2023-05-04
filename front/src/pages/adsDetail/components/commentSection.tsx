import { Avatar, Box, Button, Flex, Heading, Image, Text, Textarea, useToast } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { AccessContext } from "../../../context/access/accessContext"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { IAdDetail } from "../../../context/adsDetail/adsTypes";
import { apiPostComment } from "../../../services/comments/commentsApi";
import { AdDetailContext } from "../../../context/adsDetail/adsDetailContext";



export const AdCommentSection = (adToShow: IAdDetail, display: Array<string | null>) => {
    const [comment, setComment] = useState<string>('')
    const { getFullAd } = useContext(AdDetailContext)
    const token = localStorage.getItem('motors.token')
    const user = JSON.parse(localStorage.getItem('motors.user')!)
    const toast = useToast()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            ad: '',
            content: ''
        }
    });

    const showToast = (message: string, color: string) => {
        return (toast({
            position: "bottom-right",
            render: () => {
                return (
                    <Box color={"black"} p={4} bg={color} borderRadius={10} fontSize={17}>
                        {message}
                    </Box>
                )
            }
        }))
    }

    const onSubmit = async (data: IComment) => {
        data.content = comment
        data.ad = adToShow.id

        const token = localStorage.getItem('motors.token')!

        await apiPostComment(data, token).then(() => {
            setComment('')
            getFullAd(adToShow.id)
            showToast('Comentário criado', "green.400")
        }).catch((error) => { showToast(error.response.data.message, "red.500") })

    }

    return (
        <Box display={display}>
            <Box backgroundColor={'white'} width={'100%'} borderRadius={5} p={7} display={'flex'} flexDirection={'column'} gap={7}>
                <Heading marginBottom={10} as='h2' size={'md'}>
                    Comentários
                </Heading>
                <Box marginBottom={5} maxHeight={'500px'} overflow={'auto'} borderRadius={5}>
                    {adToShow.comments?.sort((a, b): any => {
                        const dateA = a.createdAt.split('-').join()
                        const dateB = b.createdAt.split('-').join()

                        if (dateA > dateB) {
                            return -1
                        }

                        if (dateA < dateB) {
                            return 1
                        }

                        return 0
                    }).map((comment: any, index) => {
                        return (
                            <div key={index}>
                                <Flex alignItems={"center"} gap={5}>
                                    {
                                        comment.user.profile_picture ? (
                                            <Image src={comment.user.profile_picture} h={'50px'} w={'50px'} borderRadius={'50%'} backgroundColor={"black"} />
                                        ) : (
                                            <Avatar name={comment.user.name} />
                                        )
                                    }
                                    <Flex gap={1} alignItems={'center'}>
                                        <Text fontWeight={600}>{comment.user.name} </Text>
                                        <Text color={"gray.500"} fontSize={'12px'}> • {calcDate(comment.createdAt)}</Text>
                                    </Flex>
                                </Flex>
                                <Text marginTop={5} marginBottom={5}>{comment.content}</Text >
                            </div>
                        )
                    })}
                </Box>
            </Box>
            <Box backgroundColor={'white'} width={'100%'} borderRadius={5} p={7} display={'flex'} flexDirection={'column'} gap={7} marginTop={10}>
                <Flex alignItems={"center"} gap={5}>
                    {
                        user ? (
                            user.profile_image ? (
                                <Image src={user.profile_image} w={'50px'} h={'50px'} borderRadius={'50%'} />
                            ) : (
                                <Avatar name={user.name} />
                            )
                        ) : (
                            null
                        )

                    }
                    <Text>{user?.name}</Text>
                </Flex>
                <Box position={'relative'}>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <Flex direction={['column', null, 'row']} gap={[5, null, 0]}>
                            <Textarea
                                value={comment}
                                resize={'none'}
                                zIndex={0}
                                placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
                                h={'100px'}
                                {...register('content')}
                                onChange={(e) => {
                                    setComment(e.target.value)
                                }}

                            />
                            <Button
                                backgroundColor={'brand1'}
                                position={['static', null, 'absolute']}
                                w={'130px'}
                                h={'30px'}
                                zIndex={2}
                                isDisabled={token && comment.length > 1 ? false : true}
                                fontWeight={400}
                                bottom={3}
                                right={3}
                                color={"white"}
                                type="submit"
                            >
                                Comentar
                            </Button>
                        </Flex>
                    </form>
                </Box>
                <Flex gap={3} direction={['column', 'row']}>
                    <Box display={'flex'} flexDirection={'row'} gap={3}>
                        <Button
                            backgroundColor={"gray.100"}
                            color={"gray.500"}
                            h={'20px'}
                            borderRadius={'15'}
                            fontSize={10}
                            onClick={(e) => {
                                setComment(e.currentTarget.innerText)
                            }}
                        >
                            Gostei Muito!
                        </Button>
                        <Button
                            backgroundColor={"gray.100"}
                            color={"gray.500"}
                            h={'20px'}
                            borderRadius={'15'}
                            fontSize={10}
                            onClick={(e) => {
                                setComment(e.currentTarget.innerText)
                            }}
                        >
                            Incrível
                        </Button>
                    </Box>
                    <Button
                        backgroundColor={"gray.100"}
                        color={"gray.500"}
                        h={'20px'}
                        borderRadius={'15'}
                        fontSize={10}
                        maxWidth={'200px'}
                        onClick={(e) => {
                            setComment(e.currentTarget.innerText)
                        }}
                    >
                        Recomendarei para meus amigos
                    </Button>
                </Flex>
            </Box>
        </Box >
    )
}

export interface IComment {
    ad: string
    content: string
}

const getDays = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
};

const calcDate = (date: string) => {
    const objDateNow = new Date()
    const dateNow = objDateNow.toISOString().split('T')[0]
    const commentDate = date.split(' ')[0]
    const commentDateData = commentDate.split('-')
    const dateNowData = dateNow.split('-')
    const years = parseInt(dateNowData[0]) - parseInt(commentDateData[0])
    const months = parseInt(dateNowData[1]) - parseInt(commentDateData[1])
    const days = parseInt(dateNowData[2]) - parseInt(commentDateData[2])

    if (years > 0) {
        if (years > 1) {
            return `${years} years ago`
        } else if (years == 1) {
            const remaningMonths = 12 - parseInt(commentDateData[1])
            return `${remaningMonths + parseInt(dateNowData[1])} months ago`
        }

        return `${years} year ago`
    }

    if (months > 0) {
        if (months > 1) {
            return `${months} months ago`
        } else if (months == 1) {
            const numberOfDays = getDays(parseInt(commentDateData[0]), parseInt(commentDateData[0]))

            const remaningDays = numberOfDays - parseInt(commentDateData[2])

            if (numberOfDays === remaningDays + parseInt(dateNowData[2])) {
                return `1 month ago`
            }

            return `${remaningDays + parseInt(dateNowData[2])} days ago`
        }
    }

    if (days > 0) {
        if (days > 1) {
            return `${days} days ago`
        }
        return `${days} day ago`
    }

    if (commentDate == dateNow) {
        return "Today"
    }
}