import { Heading, Stack, Link, Flex, Input, Button, Text, Box } from "@chakra-ui/react"
import { useContext, useEffect } from "react"
import { HomeContext } from "../../../context/home/homeContext"
import { useForm } from "react-hook-form"

const FilterOptions = () => {
    const { listAds, filterAdsByTag, setFilteredAds, setFiltersUsed, filtersUsed, filterAdsByValue, filteredAds, handleFilterTagDelete } = useContext(HomeContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset
    } = useForm<{ minKm: string, maxKm: string, minPc: string, maxPc: string }>({
        defaultValues: {
            minKm: '',
            maxKm: '',
            minPc: '',
            maxPc: ''
        }
    });

    const onSubmit = (data: { minKm: string, maxKm: string, minPc: string, maxPc: string }) => {
        if (data.minKm || data.maxKm) {
            filterAdsByValue(data.minKm, data.maxKm, 'mileage')
            reset()
        } else if (data.minPc || data.maxPc) {
            filterAdsByValue(data.minPc, data.maxPc, 'price')
            reset()
        }
    }

    return (
        <>
            <Stack>
                <Flex gap={2} maxWidth={'350px'} flexWrap={'wrap'}>
                    {
                        Object.values(filtersUsed).length > 0 ?
                            Object.values(filtersUsed! as string[]).map((val: string, index) => {
                                return (
                                    <Flex bg={'brand3'} p={2} borderRadius={5} h={'30px'} flexWrap={'wrap'} key={index} alignContent={'center'}>
                                        <Button bg={'brand3'} fontSize={'12px'} h={'20px'} p={0} m={0} onClick={() => { handleFilterTagDelete(val) }}>{val} x</Button>
                                    </Flex>
                                )
                            })!
                            :
                            null
                    }
                </Flex>
                {filtersUsed.hasOwnProperty('brand') ?
                    null :
                    <Heading>Marca</Heading>
                }
                {
                    filtersUsed.hasOwnProperty('brand') ?
                        null :
                        filteredAds.length > 0 ?
                            filteredAds.filter((el, index) => index === filteredAds.findIndex(item => item.brand === el.brand))
                                .map(el => {
                                    return (
                                        <Link key={el.id} color={"gray.600"} onClick={() => filterAdsByTag(el.brand, 'brand')}>{el.brand}</Link>
                                    )
                                })

                            :
                            Object.keys(filtersUsed).length > 0 ?
                                listAds
                                    .filter((el, index) => index === listAds.findIndex(item => item.brand === el.brand))
                                    .map(el => {
                                        return (
                                            <Link key={el.id} onClick={() => { setFilteredAds([]), setFiltersUsed({}) }} color={"gray.600"}>{el.brand}</Link>
                                        )
                                    })
                                :
                                listAds
                                    .filter((el, index) => index === listAds.findIndex(item => item.brand === el.brand))
                                    .map(el => {
                                        return (
                                            <Link key={el.id} onClick={() => filterAdsByTag(el.brand, 'brand')} color={"gray.600"}>{el.brand}</Link>
                                        )
                                    })
                }
            </Stack>
            <Stack>
                {filtersUsed.hasOwnProperty('model') ?
                    null :
                    <Heading>Modelo</Heading>
                }
                {
                    filtersUsed.hasOwnProperty('model') ?
                        null :
                        filteredAds.length > 0 ?
                            filteredAds.filter((el, index) => index === filteredAds.findIndex(item => item.model === el.model))
                                .map(el => {
                                    return (
                                        <Link key={el.id} color={"gray.600"} onClick={() => filterAdsByTag(el.model, 'model')}>{el.model}</Link>
                                    )
                                })
                            :
                            Object.keys(filtersUsed).length > 0 ?
                                listAds.filter((el, index) => index === listAds.findIndex(item => item.model === el.model))
                                    .map(el => {
                                        return (
                                            <Link key={el.id} color={"gray.600"} onClick={() => { setFilteredAds([]), setFiltersUsed({}) }}>{el.model}</Link>
                                        )
                                    })
                                :
                                listAds.filter((el, index) => index === listAds.findIndex(item => item.model === el.model))
                                    .map(el => {
                                        return (
                                            <Link key={el.id} color={"gray.600"} onClick={() => filterAdsByTag(el.model, 'model')}>{el.model}</Link>
                                        )
                                    })
                }
            </Stack>
            <Stack>
                {filtersUsed.hasOwnProperty('year') ?
                    null :
                    <Heading>Ano</Heading>
                }
                {
                    filtersUsed.hasOwnProperty('year') ?
                        null :
                        filteredAds.length > 0 ?
                            filteredAds.filter((el, index) => index === filteredAds.findIndex(item => item.year === el.year))
                                .map(el => {
                                    return (
                                        <Link key={el.id} color={"gray.600"} onClick={() => filterAdsByTag(el.year, 'year')}>{el.year}</Link>
                                    )
                                })
                            :
                            Object.keys(filtersUsed).length > 0 ?
                                listAds
                                    .filter((el, index) => index === listAds.findIndex(item => item.year === el.year))
                                    .map(el => {

                                        return (
                                            <Link key={el.id} color={"gray.600"} onClick={() => { setFilteredAds([]), setFiltersUsed({}) }}>{el.year}</Link>
                                        )
                                    })
                                :
                                listAds.filter((el, index) => index === listAds.findIndex(item => item.year === el.year))
                                    .map(el => {
                                        return (
                                            <Link key={el.id} color={"gray.600"} onClick={() => filterAdsByTag(el.year, 'year')}>{el.year}</Link>
                                        )
                                    })

                }
            </Stack>
            <Stack>
                {filtersUsed.hasOwnProperty('fuel') ?
                    null :
                    <Heading>Combustível</Heading>
                }
                {
                    filtersUsed.hasOwnProperty('fuel') ?
                        null :
                        filteredAds.length > 0 ?
                            filteredAds.filter((el, index) => index === filteredAds.findIndex(item => item.fuel === el.fuel))
                                .map(el => {
                                    return (
                                        <Link key={el.id} color={"gray.600"} onClick={() => filterAdsByTag(el.fuel, 'fuel')}>{el.fuel}</Link>
                                    )
                                })
                            :
                            Object.keys(filtersUsed).length > 0 ?
                                listAds
                                    .filter((el, index) => index === listAds.findIndex(item => item.fuel === el.fuel))
                                    .map(el => {
                                        return (
                                            <Link key={el.id} color={"gray.600"} onClick={() => { setFilteredAds([]), setFiltersUsed({}) }}>{el.fuel}</Link>
                                        )
                                    })
                                :
                                listAds
                                    .filter((el, index) => index === listAds.findIndex(item => item.fuel === el.fuel))
                                    .map(el => {
                                        return (
                                            <Link key={el.id} color={"gray.600"} onClick={() => filterAdsByTag(el.fuel, 'fuel')}>{el.fuel}</Link>
                                        )
                                    })
                }
            </Stack>
            <Stack>
                {filtersUsed.hasOwnProperty('mileage') ?
                    null :
                    <>
                        <Heading>Km</Heading>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Flex justify={"center"} gap={"10px"} maxW={"250px"}>
                                <Input type={"number"} width={"50%"} placeholder="Mínimo" {...register('minKm')} />
                                <Input type={"number"} width={"50%"} placeholder="Máximo" {...register('maxKm')} />
                            </Flex>
                            <Button h={'30px'} w={'100%'} mt={2} type="submit" display={'none'}>Aplicar</Button>
                        </form>
                    </>
                }
            </Stack>
            <Stack>
                {
                    filtersUsed.hasOwnProperty('price') ?
                        null :
                        <>
                            <Heading>Preço</Heading>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Flex justify={"center"} gap={"10px"} maxW={"250px"}>
                                    <Input type={"number"} width={"50%"} placeholder="Mínimo" {...register('minPc')} />
                                    <Input type={"number"} width={"50%"} placeholder="Máximo" {...register('maxPc')} />
                                </Flex>
                                <Button h={'30px'} w={'100%'} mt={2} type="submit" display={'none'}> Aplicar</Button>
                            </form>
                        </>
                }
            </Stack >
        </>
    )
}

export default FilterOptions