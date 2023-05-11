import { Heading, Stack, Link, Flex, Input, Button } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { HomeContext } from "../../../context/home/homeContext"
import { useForm } from "react-hook-form"
import { ModalDashboardContext } from "../../../context/modalDashboard/modalDashboard"

const FilterOptions = () => {
    const { listAds, showMoreBrand, setShowMoreBrand, showMore, setShowMore, filterAdsByTag, setFilteredAds, showLess, setShowLess, showLessBrand, setShowLessBrand, filterLimitBrand, setFilterLimitBrand, setFiltersUsed, filtersUsed, filterAdsByValue, filteredAds, handleFilterTagDelete, filterLimit, setFilterLimit } = useContext(HomeContext)
    const { brands, models } = useContext(ModalDashboardContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset
    } = useForm<{
        minKm: string,
        maxKm: string,
        minPc: string,
        maxPc: string
    }>({
        defaultValues: {
            minKm: '',
            maxKm: '',
            minPc: '',
            maxPc: ''
        }
    });

    const onSubmit = (data: {
        minKm: string,
        maxKm: string,
        minPc: string,
        maxPc: string
    }) => {
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
                                        <Button bg={'brand3'} fontSize={'12px'} h={'20px'} p={0} m={0} onClick={() => { handleFilterTagDelete(val), window.scrollTo({ top: 500, behavior: "smooth" }) }}>{val} x</Button>
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
                                .map((el, indexx) => {
                                    return (
                                        indexx + 1 <= filterLimitBrand ? (
                                            <Link key={el.id} color={"gray.600"} onClick={() => (filterAdsByTag(el.brand, 'brand'), window.scrollTo({ top: 500, behavior: "smooth" }))}>{el.brand}</Link>
                                        ) : (
                                            null
                                        )
                                    )
                                })
                            :
                            Object.keys(filtersUsed).length > 0 ?
                                listAds
                                    .filter((el, index) => index === listAds.findIndex(item => item.brand === el.brand))
                                    .map((el, indexx) => {
                                        return (
                                            indexx + 1 <= filterLimitBrand ? (
                                                <Link key={el.id} onClick={() => { setFilteredAds([]), setFiltersUsed({}), window.scrollTo({ top: 500, behavior: "smooth" }) }} color={"gray.600"}>{el.brand}</Link>
                                            ) : (
                                                null
                                            )
                                        )
                                    })
                                :
                                listAds
                                    .filter((el, index) => index === listAds.findIndex(item => item.brand === el.brand))
                                    .map((el, indexx) => {
                                        return (
                                            indexx + 1 <= filterLimitBrand ? (
                                                <Link key={el.id} onClick={() => { filterAdsByTag(el.brand, 'brand'), window.scrollTo({ top: 500, behavior: "smooth" }) }} color={"gray.600"}>{el.brand}</Link>
                                            ) : (
                                                null
                                            )
                                        )
                                    })
                }
                {
                    filtersUsed.hasOwnProperty('brand') ? (
                        null
                    ) : (
                        filteredAds.length > 0 ? (
                            Array.from(new Set(filteredAds.map((ad) => ad.brand))).length >= 5 ? (
                                <Flex gap={2}>
                                    <Button height={'30px'} bgColor={"brand4"} color={"brand1"} fontSize={12} display={showMoreBrand} onClick={() => {
                                        setFilterLimitBrand(filterLimitBrand + 5)
                                        setShowLessBrand("flex")
                                        if (Array.from(new Set(filteredAds.map((ad) => ad.brand))).length > 0 && (filterLimitBrand + 5) >= Array.from(new Set(filteredAds.map((ad) => ad.brand))).length - 1) {
                                            setShowMoreBrand("none")
                                        }
                                    }}>Mostrar mais...</Button>
                                    <Button height={'30px'} bgColor={"brand4"} color={"brand1"} fontSize={12} display={showLessBrand} onClick={() => {
                                        setFilterLimitBrand(filterLimitBrand - 5)
                                        setShowMoreBrand("flex")
                                        if (filterLimitBrand == 10) {
                                            setShowLessBrand("none")
                                        }
                                    }}>Mostrar menos...</Button>
                                </Flex>
                            ) : (
                                null
                            )
                        ) : (
                            Array.from(new Set(listAds.map((ad) => ad.brand))).length >= 5 ? (
                                <Flex gap={2}>
                                    <Button height={'30px'} bgColor={"brand4"} color={"brand1"} fontSize={12} display={showMoreBrand} onClick={() => {
                                        setFilterLimitBrand(filterLimitBrand + 5)
                                        setShowLessBrand("flex")
                                        if (Array.from(new Set(listAds.map((ad) => ad.brand))).length > 0 && (filterLimitBrand + 5) >= Array.from(new Set(listAds.map((ad) => ad.brand))).length - 1) {
                                            setShowMoreBrand("none")
                                        } else if (Array.from(new Set(listAds.map((ad) => ad.brand))).length - 1 <= filterLimitBrand + 5) {
                                            setShowMoreBrand("none")
                                        }
                                    }}>Mostrar mais...</Button>
                                    <Button height={'30px'} bgColor={"brand4"} color={"brand1"} fontSize={12} display={showLessBrand} onClick={() => {
                                        setFilterLimitBrand(filterLimitBrand - 5)
                                        setShowMoreBrand("flex")
                                        if (filterLimitBrand == 10) {
                                            setShowLessBrand("none")
                                        }
                                    }}>Mostrar menos...</Button>
                                </Flex>
                            ) : (
                                null
                            )

                        )
                    )
                }
            </Stack >
            <Stack>
                {filtersUsed.hasOwnProperty('model') ?
                    null :
                    <Heading>Modelo</Heading>
                }
                {
                    filtersUsed.hasOwnProperty('model') ?
                        (
                            null
                        )
                        :
                        (
                            filteredAds.length > 0 ?
                                filteredAds.filter((el, index) => index === filteredAds.findIndex(item => item.model === el.model))
                                    .map((el, indexx) => {
                                        return (
                                            indexx + 1 <= filterLimit ? (
                                                <Link key={el.id} color={"gray.600"} onClick={() => { filterAdsByTag(el.model, 'model'), window.scrollTo({ top: 500, behavior: "smooth" }) }}>{el.model}</Link>
                                            ) : (
                                                null
                                            )
                                        )
                                    })
                                :
                                Object.keys(filtersUsed).length > 0 ?
                                    listAds.filter((el, index) => index === listAds.findIndex(item => item.model === el.model))
                                        .map((el, indexx) => {
                                            return (
                                                indexx + 1 <= filterLimit ? (
                                                    <Link key={el.id} color={"gray.600"} onClick={() => { setFilteredAds([]), setFiltersUsed({}), window.scrollTo({ top: 500, behavior: "smooth" }) }}>{el.model}</Link>
                                                ) : (
                                                    null
                                                )
                                            )
                                        })
                                    :
                                    listAds.filter((el, index) => index === listAds.findIndex(item => item.model === el.model))
                                        .map((el, indexx) => {
                                            return (
                                                indexx + 1 <= filterLimit ? (
                                                    <Link key={el.id} color={"gray.600"} onClick={() => { filterAdsByTag(el.model, 'model'), window.scrollTo({ top: 500, behavior: "smooth" }) }}>{el.model}</Link>
                                                ) : (
                                                    null
                                                )
                                            )
                                        })
                        )

                }
                {
                    filtersUsed.hasOwnProperty('model') ?
                        (
                            null
                        ) :
                        (
                            filteredAds.length > 0 ? (
                                Array.from(new Set(filteredAds.map((ad) => ad.model))).length >= 5 ? (
                                    <Flex gap={2}>
                                        <Button height={'30px'} bgColor={"brand4"} color={"brand1"} fontSize={12} display={showMore} onClick={() => {
                                            setFilterLimit(filterLimit + 5)
                                            setShowLess("flex")
                                            if (Array.from(new Set(filteredAds.map((ad) => ad.model))).length > 0 && (filterLimit + 5) >= Array.from(new Set(filteredAds.map((ad) => ad.model))).length - 1) {
                                                setShowMore("none")
                                            } else if (Array.from(new Set(filteredAds.map((ad) => ad.model))).length - 1 <= filterLimit + 5) {
                                                setShowMore("none")
                                            }
                                        }}>Mostrar mais...</Button>
                                        <Button height={'30px'} bgColor={"brand4"} color={"brand1"} fontSize={12} display={showLess} onClick={() => {
                                            setFilterLimit(filterLimit - 5)
                                            setShowMore("flex")
                                            if (filterLimit == 10) {
                                                setShowLess("none")
                                            }
                                        }}>Mostrar menos...</Button>
                                    </Flex>
                                ) : (
                                    null
                                )

                            ) : (
                                Array.from(new Set(listAds.map((ad) => ad.model))).length >= 5 ? (
                                    <Flex gap={2}>
                                        <Button height={'30px'} bgColor={"brand4"} color={"brand1"} fontSize={12} display={showMore} onClick={() => {
                                            setFilterLimit(filterLimit + 5)
                                            setShowLess("flex")
                                            if (Array.from(new Set(listAds.map((ad) => ad.model))).length > 0 && (filterLimit + 5) >= Array.from(new Set(listAds.map((ad) => ad.model))).length - 1) {
                                                setShowMore("none")
                                            } else if (Array.from(new Set(listAds.map((ad) => ad.model))).length - 1 <= filterLimit + 5) {
                                                setShowMore("none")
                                            }
                                        }}>Mostrar mais...</Button>
                                        <Button height={'30px'} bgColor={"brand4"} color={"brand1"} fontSize={12} display={showLess} onClick={() => {
                                            setFilterLimit(filterLimit - 5)
                                            setShowMore("flex")
                                            if (filterLimit == 10) {
                                                setShowLess("none")
                                            }
                                        }}>Mostrar menos...</Button>
                                    </Flex>
                                ) : (
                                    null
                                )
                            )
                        )
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
                                        <Link key={el.id} color={"gray.600"} onClick={() => (filterAdsByTag(el.year, 'year'), window.scrollTo({ top: 500, behavior: "smooth" }))}>{el.year}</Link>
                                    )
                                })
                            :
                            Object.keys(filtersUsed).length > 0 ?
                                listAds
                                    .filter((el, index) => index === listAds.findIndex(item => item.year === el.year))
                                    .map(el => {

                                        return (
                                            <Link key={el.id} color={"gray.600"} onClick={() => { setFilteredAds([]), setFiltersUsed({}), window.scrollTo({ top: 500, behavior: "smooth" }) }}>{el.year}</Link>
                                        )
                                    })
                                :
                                listAds.filter((el, index) => index === listAds.findIndex(item => item.year === el.year))
                                    .map(el => {
                                        return (
                                            <Link key={el.id} color={"gray.600"} onClick={() => (filterAdsByTag(el.year, 'year'), window.scrollTo({ top: 500, behavior: "smooth" }))}>{el.year}</Link>
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
                                        <Link key={el.id} color={"gray.600"} onClick={() => (filterAdsByTag(el.fuel, 'fuel'), window.scrollTo({ top: 500, behavior: "smooth" }))}>{el.fuel}</Link>
                                    )
                                })
                            :
                            Object.keys(filtersUsed).length > 0 ?
                                listAds
                                    .filter((el, index) => index === listAds.findIndex(item => item.fuel === el.fuel))
                                    .map(el => {
                                        return (
                                            <Link key={el.id} color={"gray.600"} onClick={() => { setFilteredAds([]), setFiltersUsed({}), window.scrollTo({ top: 500, behavior: "smooth" }) }}>{el.fuel}</Link>
                                        )
                                    })
                                :
                                listAds
                                    .filter((el, index) => index === listAds.findIndex(item => item.fuel === el.fuel))
                                    .map(el => {
                                        return (
                                            <Link key={el.id} color={"gray.600"} onClick={() => { filterAdsByTag(el.fuel, 'fuel'), window.scrollTo({ top: 500, behavior: "smooth" }) }}>{el.fuel}</Link>
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